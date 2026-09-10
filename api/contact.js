const { Resend } = require("resend");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const resendApiKey =
    process.env.RESEND_API_KEY;

  const turnstileSecretKey =
    process.env.TURNSTILE_SECRET_KEY;

  if (!resendApiKey) {
    console.error(
      "RESEND_API_KEY is not available"
    );

    return res.status(500).json({
      error: "Email service is not configured",
    });
  }

  if (!turnstileSecretKey) {
    console.error(
      "TURNSTILE_SECRET_KEY is not available"
    );

    return res.status(500).json({
      error: "Security service is not configured",
    });
  }

  try {
    const {
      name,
      email,
      message,
      lang,
      turnstileToken,
    } = req.body || {};

    /* =====================================================
       BASIC VALIDATION
    ===================================================== */

    if (
      !name ||
      !email ||
      !message
    ) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    if (!turnstileToken) {
      return res.status(400).json({
        error: "Security verification required",
      });
    }

    const cleanName =
      String(name)
        .trim()
        .slice(0, 100);

    const cleanEmail =
      String(email)
        .trim()
        .slice(0, 200);

    const cleanMessage =
      String(message)
        .trim()
        .slice(0, 5000);

    const cleanLang =
      lang === "es"
        ? "es"
        : "en";

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(cleanEmail)
    ) {
      return res.status(400).json({
        error: "Invalid email address",
      });
    }

    /* =====================================================
       CLOUDFLARE TURNSTILE VALIDATION
    ===================================================== */

    const turnstileResponse =
      await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body:
            new URLSearchParams({
              secret:
                turnstileSecretKey,

              response:
                String(
                  turnstileToken
                ),
            }),
        }
      );

    const turnstileResult =
      await turnstileResponse.json();

    if (
      !turnstileResult.success
    ) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult[
          "error-codes"
        ]
      );

      return res.status(403).json({
        error: "Security verification failed",
      });
    }

    /* =====================================================
       OPTIONAL HOSTNAME CHECK
    ===================================================== */

    const allowedHostnames = [
      "tonybaldessari.dev",
      "www.tonybaldessari.dev",
    ];

    if (
      turnstileResult.hostname &&
      !allowedHostnames.includes(
        turnstileResult.hostname
      )
    ) {
      console.error(
        "Unexpected Turnstile hostname:",
        turnstileResult.hostname
      );

      return res.status(403).json({
        error: "Invalid security verification",
      });
    }

    /* =====================================================
       RESEND
    ===================================================== */

    const resend =
      new Resend(
        resendApiKey
      );

    const content =
      cleanLang === "es"
        ? {
            subject:
              `Contacto desde portfolio — ${cleanName}`,

            title:
              "Nuevo mensaje desde tu portfolio",

            intro:
              "Recibiste un nuevo mensaje desde tu portfolio.",

            nameLabel:
              "Nombre",

            emailLabel:
              "Email",

            messageLabel:
              "Mensaje",

            footer:
              "Enviado desde tonybaldessari.dev",
          }
        : {
            subject:
              `Portfolio contact — ${cleanName}`,

            title:
              "New portfolio message",

            intro:
              "You received a new message from your portfolio.",

            nameLabel:
              "Name",

            emailLabel:
              "Email",

            messageLabel:
              "Message",

            footer:
              "Sent from tonybaldessari.dev",
          };

    const {
      data,
      error,
    } =
      await resend.emails.send({
        from:
          "Tony Baldessari Portfolio <contact@tonybaldessari.dev>",

        to: [
          "tonybaldessari@outlook.com",
        ],

        replyTo:
          cleanEmail,

        subject:
          content.subject,

        text: `
${content.title}

${content.nameLabel}: ${cleanName}
${content.emailLabel}: ${cleanEmail}

${content.messageLabel}:
${cleanMessage}
        `.trim(),

        html: `
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              max-width: 620px;
              margin: 0 auto;
              color: #111827;
              line-height: 1.6;
            "
          >
            <h2>
              ${content.title}
            </h2>

            <p>
              ${content.intro}
            </p>

            <p>
              <strong>
                ${content.nameLabel}:
              </strong>

              ${escapeHtml(
                cleanName
              )}
            </p>

            <p>
              <strong>
                ${content.emailLabel}:
              </strong>

              <a
                href="mailto:${escapeHtml(
                  cleanEmail
                )}"
              >
                ${escapeHtml(
                  cleanEmail
                )}
              </a>
            </p>

            <p>
              <strong>
                ${content.messageLabel}:
              </strong>
            </p>

            <div
              style="
                background: #f3f4f6;
                border-radius: 8px;
                padding: 16px;
                white-space: pre-wrap;
              "
            >${escapeHtml(
              cleanMessage
            )}</div>

            <hr
              style="
                border: 0;
                border-top: 1px solid #e5e7eb;
                margin: 24px 0;
              "
            >

            <p
              style="
                color: #6b7280;
                font-size: 12px;
              "
            >
              ${content.footer}
            </p>
          </div>
        `,
      });

    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return res.status(500).json({
        error:
          "Unable to send email",
      });
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
    });
  }

  catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return res.status(500).json({
      error:
        "Internal server error",
    });
  }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}