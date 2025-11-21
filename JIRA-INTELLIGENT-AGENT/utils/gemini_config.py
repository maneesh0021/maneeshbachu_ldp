import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
print("Loaded API key:", "FOUND" if api_key else "NOT FOUND")

genai.configure(api_key=api_key)

def get_model():
    return genai.GenerativeModel("gemini-2.0-flash")
