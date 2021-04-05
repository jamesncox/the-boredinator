export default function Footer() {
  return (
    <div className="footer">
      <p>
        Made with ❤️‍ by{" "}
        <a
          className="footer-link"
          href="https://www.jamescox.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          James Cox
        </a>
      </p>
      <p>
        {"Copyright © "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
