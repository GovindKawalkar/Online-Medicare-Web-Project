import streamlit as st
from streamlit.components.v1 import html
import re

st.set_page_config(page_title="Pharmacy App", layout="wide")

# ---------------- SESSION ----------------
if "logged_in" not in st.session_state:
    st.session_state.logged_in = False

# ---------------- EMAIL VALIDATION ----------------
def is_valid_email(email):
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email)

# ---------------- LOAD HTML WITH CSS & JS ----------------
def load_html(html_file, css_file=None, js_file=None, height=1200):
    html_code = ""

    if css_file:
        with open(css_file, "r", encoding="utf-8") as f:
            css = f.read()
        html_code += f"<style>{css}</style>"

    if html_file:
        with open(html_file, "r", encoding="utf-8") as f:
            html_code += f.read()

    if js_file:
        with open(js_file, "r", encoding="utf-8") as f:
            js = f.read()
        html_code += f"<script>{js}</script>"

    html(html_code, height=height, scrolling=True)

# ---------------- LOGIN PAGE ----------------
if not st.session_state.logged_in:
    st.title("💊 Pharmacy Login")

    email = st.text_input("Your Email")
    password = st.text_input("Your Password", type="password")

    if st.button("Login"):
        if not is_valid_email(email):
            st.error("Invalid email")
        elif password == "":
            st.error("Password cannot be empty")
        else:
            st.session_state.logged_in = True
            st.rerun()

# ---------------- DASHBOARD ----------------
else:
    load_html(
        html_file="dashboard.html",
        css_file="styles.css",
        js_file="scripts.js",
        height=1500
    )
