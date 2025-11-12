# streamlit_app.py
import streamlit as st
import subprocess
import os
import glob
import time

st.set_page_config(page_title="RiskCalc Runner", layout="wide")

st.title("Financial Risk — Run & Reports")

st.markdown(
    """
    Use the buttons below to run the risk pipeline (both CLEAR and BREACH).
    The app will show logs in the terminal where Streamlit runs, and list the generated PDFs.
    """
)

col1, col2 = st.columns([1, 2])

with col1:
    if st.button("Run Risk Analysis (CLEAR + BREACH)"):
        st.info("Starting analysis... check server/terminal logs for MCP calls.")
        # start main.py as a subprocess to keep Streamlit responsive
        proc = subprocess.Popen(["python", "main.py"], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        # read stdout stream until process finishes
        lines = []
        while True:
            out = proc.stdout.readline()
            if out:
                lines.append(out)
                # show latest logs in the sidebar or area
                st.write(out.strip())
                # allow UI to update
                time.sleep(0.01)
            elif proc.poll() is not None:
                # process finished, read remaining
                remaining = proc.stdout.read()
                if remaining:
                    st.write(remaining)
                    lines.append(remaining)
                break
        st.success("Analysis finished. Scroll down to see generated reports.")

with col2:
    st.write("Available reports in `/reports` folder:")
    report_files = sorted(glob.glob("reports/*.pdf"), reverse=True)
    if not report_files:
        st.warning("No reports found yet. Run the analysis to generate PDFs.")
    else:
        for p in report_files[:20]:
            name = os.path.basename(p)
            st.write(f"- {name}")
            with open(p, "rb") as f:
                btn = st.download_button(label=f"Download {name}", data=f, file_name=name, mime="application/pdf")

st.markdown("---")
st.write("Logs & status:")
st.text("Streamlit will display process output while `main.py` runs. Check CLI for more detailed logs.")