import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xl font-bold font-display">
              <Heart size={20} className="text-primary" /> PCOS Nourish
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering women with knowledge and nutrition guidance for
              managing PCOS naturally.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-bold">Educational Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
                >
                  PCOS on Wikipedia <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/infertility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
                >
                  WHO Fact Sheet <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-bold">PCOS Awareness</h4>
            <p className="text-sm text-muted-foreground">
              September is PCOS Awareness Month. Spread the word and help
              women get diagnosed and treated early.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            ⚕️ <strong>Disclaimer:</strong> This website is for educational
            purposes only and is not a substitute for professional medical
            advice, diagnosis, or treatment. Always consult your healthcare
            provider.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} PCOS Nourish. Made with 💗
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
