export default function Home() {
  const dsbdFiles = [
    "vertopal.com_DSBDAL_Exp_01.txt",
    "vertopal.com_DSBDAL_Exp_02.txt",
    "vertopal.com_DSBDAL_Exp_03.txt",
    "vertopal.com_DSBDAL_Exp_04.txt",
    "vertopal.com_DSBDAL_Exp_05.txt",
    "vertopal.com_DSBDAL_Exp_06.txt",
    "vertopal.com_DSBDAL_Exp_07.txt",
    "vertopal.com_DSBDAL_Exp_08.txt",
    "vertopal.com_DSBDAL_Exp_09.txt",
    "vertopal.com_DSBDAL_Exp_10.txt",
  ];

  const aiFiles = [
    "ai1.txt",
    "ai2.txt",
    "ai3.txt",
    "ai4.txt",
    "ai5.txt",
    "ai6.txt",
  ];

  return (
    <div className="container">
      <h1>DSBD</h1>
      <div className="grid">
        {dsbdFiles.map((file, index) => (
          <div key={file} className="download-item">
            <a href={`/DSBD/${file}`} download={file}>
              <button className="download-btn">Download Exp {index + 1}</button>
            </a>
          </div>
        ))}
      </div>

      <h1>AI</h1>
      <div className="grid">
        {aiFiles.map((file, index) => (
          <div key={file} className="download-item">
            <a href={`/ai/${file}`} download={file}>
              <button className="download-btn">Download Exp {index + 1}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
