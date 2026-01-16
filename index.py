import streamlit as st
import re
from streamlit.components.v1 import html

st.set_page_config(page_title="Pharmacy Login", layout="centered")

# ---------------- EMAIL VALIDATION ----------------
def is_valid_email(email):
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email)

# ---------------- SESSION ----------------
if "logged_in" not in st.session_state:
    st.session_state.logged_in = False

# ---------------- DASHBOARD LOADER ----------------
def load_dashboard():
    with open("dashboard.html", "r", encoding="utf-8") as f:
        dashboard_html = f.read()
    html(dashboard_html, height=1200, scrolling=True)

# ---------------- LOGIN PAGE ----------------
if not st.session_state.logged_in:
    st.title("💊 Pharmacy Login")

    email = st.text_input("Your Email")
    password = st.text_input("Your Password", type="password")

    if st.button("Login"):
        if not is_valid_email(email):
            st.error("Please enter a valid email")
        elif password == "":
            st.error("Password cannot be empty")
        else:
            st.session_state.logged_in = True
            st.session_state.user_email = email
            st.rerun()

# ---------------- DASHBOARD ----------------
else:
    load_dashboard()
