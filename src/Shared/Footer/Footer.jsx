const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img
            className="w-20"
            src="https://i.postimg.cc/0QsW4v9h/1.png"
            alt=""
          />
          <p>
            VocabSakura EdTech.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Gamified Learning</h6>
          <a className="link link-hover">Flashcards</a>
          <a className="link link-hover">Progress Tracking</a>
          <a className="link link-hover">Customizable Quizzes</a>
          <a className="link link-hover">Pronunciation Practice</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            VocabSakura EdTech
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
