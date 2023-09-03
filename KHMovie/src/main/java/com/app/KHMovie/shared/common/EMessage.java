package com.app.KHMovie.shared.common;

public enum EMessage {
    EMAIL_IS_REQUIRED {
        public String toString() {
            return "email_is_required";
        }
    },
    USERNAME_IS_REQUIRED {
        public String toString() {
            return "username_is_required";
        }
    },
    PASSWORD_IS_REQUIRED {
        public String toString() {
            return "password_is_required";
        }
    },

    USERNAME_INVALID {
        public String toString() {
            return "username_invalid";
        }
    },

    EMAIL_INVALID {
        public String toString() {
            return "email_invalid";
        }
    },
}
