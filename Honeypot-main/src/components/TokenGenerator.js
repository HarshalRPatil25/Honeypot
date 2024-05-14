import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { PDFDocument, PageSizes } from "pdf-lib";
import * as XLSX from 'xlsx';

function TokenGenerator() {
  const [fileType, setFileType] = useState("");
  const [filename, setFilename] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function downloadEmptyPdf() {
    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();

      // Add a blank page to the document
      const page = pdfDoc.addPage(PageSizes.A4);

      // Merged the bash script
      const pdf = "../assets/get_ip.sh";

      // Serialize the PDFDocument to bytes
      const pdfBytes = await pdfDoc.save();

      // Convert the bytes to a Blob
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

      // Create a download link for the PDF
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(pdfBlob);
      downloadLink.download = `${filename}.pdf`;

      // Append the download link to the document body and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  }

  async function downloadEmptyDocx() {
    // Create an empty Blob of type DOCX
    const blob = new Blob([], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    // Create a download link for the empty DOCX file
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${filename}.docx`;

    // Merged the bash script
    const word = "../assets/get_ip.sh";

    // Append the download link to the document body and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
  }

  const downloadEmptyXlsx = () => {
    // Example data
    const workbook = XLSX.utils.book_new();
    const worksheet_data = [
      ["Username", "Email", "Password"],
      ["John Doe", "john@example.com", "john123"],
      ["Jane Smith", "jane@example.com", "Jane@5465"],
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheet_data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Writing the workbook binary data
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });

    // Converting binary data to a Blob
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

    // Merged the bash script
    const excel = "../assets/get_ip.sh";

    // Create a download link and trigger it
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${filename}.xlsx`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(url);
  };

  // Helper function to convert string to ArrayBuffer
  function s2ab(s) {
    const buffer = new ArrayBuffer(s.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i !== s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buffer;
  }

  function checkHistory() {
    navigate("/token-history", { state: { file: filename } });
  }

  function callDownload() {
    if (!fileType) {
      alert("Select file type");
      return;
    }

    localStorage.setItem("fileType",fileType);
    localStorage.setItem("fileName",filename);
    localStorage.setItem("msg",msg);

    if (fileType === "pdf") {
        if(localStorage.getItem("totalPDF") === null){
            localStorage.setItem("totalPDF",4);
        }else{
            localStorage.setItem("totalPDF",parseInt(localStorage.getItem("totalPDF"))+1);
        }
      downloadEmptyPdf();
    } else if (fileType === "docx") {
        if(localStorage.getItem("totalDOCS") === null){
            localStorage.setItem("totalDOCS",1);
        }else{
            localStorage.setItem("totalDOCS",parseInt(localStorage.getItem("totalDOCS"))+1);
        }
      downloadEmptyDocx();
    } else if (fileType === "xlsx"){
        if(localStorage.getItem("totalXLSX") === null){
            localStorage.setItem("totalXLSX",1);
        }else{
            localStorage.setItem("totalXLSX",parseInt(localStorage.getItem("totalXLSX"))+1);
        }
      downloadEmptyXlsx();
    }
    localStorage.setItem("totalToken",(localStorage.getItem("totalPDF")===null?0:parseInt(localStorage.getItem("totalPDF")))+(localStorage.getItem("totalDOCS")===null?0:parseInt(localStorage.getItem("totalDOCS")))+(localStorage.getItem("totalXLSX")===null?0:parseInt(localStorage.getItem("totalXLSX"))));
  }

  return (
    <div className="token-generator">
      <Header />
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          {" "}
          {/* <img src={image} alt="" /> */}
          <form action="" method="POST">
            <div className="formbold-form-title-manually">
              <h2 className=""> Token Generator </h2>{" "}
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="purpose" className="formbold-form-label">
                Select your Token{" "}
              </label>{" "}
              <select
                name="purpose"
                id="purpose"
                className="formbold-form-input"
                onChange={(e) => setFileType(e.target.value)}
              >
                <option value=""> Select Your Token Type </option>{" "}
                <option value="pdf"> PDF Token </option>{" "}
                <option value="docx">MS Word Token</option>
                <option value="xlsx">MS Excel Token </option>
              </select>{" "}
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="address" className="formbold-form-label">
                Name Token{" "}
              </label>{" "}
              <input
                type="text"
                name="address"
                id="address"
                className="formbold-form-input"
                onChange={(e) => setFilename(e.target.value)}
              />{" "}
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="address" className="formbold-form-label">
                Remind note when this token is triggered{" "}
              </label>{" "}
              <input
                type="text"
                name="address"
                id="address"
                className="formbold-form-input"
                onChange={(e) => setMsg(e.target.value)}
              />{" "}
            </div>
            <div className="token-generator-btn">
              <Link to="/token-generator">
                <button className="formbold-btn" onClick={() => callDownload()}>
                  Generate and Download{" "}
                </button>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="token-generator-bottom-link">
              <p onClick={() => checkHistory()}> Check History </p>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default TokenGenerator;
