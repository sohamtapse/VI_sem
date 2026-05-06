export default function AI() {
  const files = [
    "ai1.py",
    "ai2.py",
    "ai3.py",
    "ai5.py",
    "ai6.py",
  ];

  return (
    <div className="container">
      <h1>AI</h1>
      <div className="grid">
        {files.map((file, index) => (
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
