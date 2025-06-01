import React from "react";

function CustomStyledComponent() {
  return (
    <>
      <style>{`
        .card {
          background-color: var(--dark-card) !important;
          border-radius: 8px !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1) !important;
          backdrop-filter: blur(10px);
        }

        .card_header {
          background: linear-gradient(135deg, var(--accent-color), var(--accent-hover)) !important;
          border-bottom: 1px solid var(--dark-border) !important;
          border-radius: 8px 8px 0 0 !important;
          color: white !important;
        }

        .card_body {
          background-color: var(--dark-card) !important;
          color: var(--text-primary) !important;
        }

        .card_footer {
          background-color: rgba(26, 26, 26, 0.8) !important;
          border-top: 1px solid var(--dark-border) !important;
          border-radius: 0 0 16px 16px !important;
        }

        .form_control {
          background-color: rgba(26, 26, 26, 0.8) !important;
          border: 2px solid var(--dark-border) !important;
          color: var(--text-primary) !important;
          border-radius: 12px !important;
          padding: 12px 16px !important;
          transition: all 0.3s ease !important;
        }

        .form_control:focus {
          background-color: rgba(26, 26, 26, 0.9) !important;
          border-color: var(--accent-color) !important;
          box-shadow: 0 0 0 0.2rem rgba(99, 102, 241, 0.25) !important;
          color: var(--text-primary) !important;
        }

        .form_control::placeholder {
          color: var(--text-secondary) !important;
        }

        .form_select {
          background-color: rgba(26, 26, 26, 0.8) !important;
          border: 2px solid var(--dark-border) !important;
          color: var(--text-primary) !important;
          border-radius: 12px !important;
          padding: 12px 16px !important;
          transition: all 0.3s ease !important;
        }

        .form_select:focus {
          background-color: rgba(26, 26, 26, 0.9) !important;
          border-color: var(--accent-color) !important;
          box-shadow: 0 0 0 0.2rem rgba(99, 102, 241, 0.25) !important;
          color: var(--text-primary) !important;
        }

        .form_label {
          color: var(--text-primary) !important;
          font-weight: 600 !important;
          margin-bottom: 8px !important;
        }

        .text_muted {
          color: var(--text-secondary) !important;
        }

        .alert_success {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)) !important;
          border: 1px solid var(--success-color) !important;
          color: var(--success-color) !important;
          border-radius: 12px !important;
        }

        .alert_danger {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1)) !important;
          border: 1px solid var(--error-color) !important;
          color: var(--error-color) !important;
          border-radius: 12px !important;
        }

        .section_divider {
          border: none;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--dark-border), transparent);
          margin: 2rem 0;
        }

        .profile_section {
          background: rgba(26, 26, 26, 0.5);
          border-radius: 8px;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid var(--dark-border);
          backdrop-filter: blur(10px);
        }

        .profile_info_item {
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .profile_info_item:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.1);
        }

        .section_title {
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .section_title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-color), var(--accent-hover));
          border-radius: 2px;
        }

        .hero_section {
          background: linear-gradient(135deg, var(--dark-bg) 0%, #1a1a1a 50%, var(--dark-bg) 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero_section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .floating_animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .pulse_animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .gradient_text {
          background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .error_text {
          color: var(--error-color);
          font-size: 0.875rem;
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .required_field::after {
          content: " *";
          color: var(--error-color);
        }

        @media (max-width: 768px) {
          .profile_section {
            padding: 1.5rem;
          }
          .section_title {
            font-size: 1.25rem;
          }
          .btn_primary, .btn_outline_primary, .btn_success, .btn_secondary {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
          }
        }

        .spinner_border {
          color: var(--accent-color) !important;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--dark-bg);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--accent-color);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--accent-hover);
        }
      `}</style>
    </>
  );
}

export default CustomStyledComponent;
