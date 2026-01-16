import streamlit as st
import re

# ---------------- PAGE CONFIG ----------------
st.set_page_config(
    page_title="Pharmacy Login",
    page_icon="💊",
    layout="centered"
)

# ---------------- BASIC STYLING ----------------
st.markdown("""
<style>
.login-box {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
    max-width: 400px;
    margin: auto;
}
.title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
}
.footer {
    text-align: center;
    margin-top: 30px;
    font-size: 22px;
}
.pharma { color: #2c7be5; font-weight: bold; }
.care { color: #28a745; font-weight: bold; }
</style>
""", unsafe_allow_html=True)

# ---------------- EMAIL VALIDATION ----------------
def is_valid_email(email):
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email)

# ---------------- LOGIN UI ----------------
st.markdown("<div class='login-box'>", unsafe_allow_html=True)

st.markdown("<div class='title'>Login</div>", unsafe_allow_html=True)
st.write("")

email = st.text_input("Your Email")
password = st.text_input("Your Password", type="password")

if st.button("Login", use_container_width=True):
    if not is_valid_email(email):
        st.error("Please enter a valid email")
    elif password == "":
        st.error("Password cannot be empty")
    else:
        st.success("Login successful 🎉")
        st.session_state.logged_in = True
        st.session_state.user_email = email
        # st.switch_page("dashboard.py")  # use when dashboard exists

st.write("---")

col1, col2, col3 = st.columns(3)

with col1:
    st.button("Sign Up")
with col2:
    st.button("Forgot Password")
with col3:
    st.button("Need Help?")

st.markdown("</div>", unsafe_allow_html=True)

# ---------------- FOOTER ----------------
st.markdown("""
<div class='footer'>
    <span class='pharma'>pharma</span><span class='care'>care</span>
</div>
""", unsafe_allow_html=True)
