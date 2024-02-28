import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer max-width">
        <div className="footer-left">
          <div>
            <img
              src="https://axiomgallery.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9d707233.png&w=640&q=75"
              alt=""
            />
          </div>
          <div>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating Axiom.
          </div>

          <div className="inputbox inputbox-full">
            <input
              required="required"
              className="footer-input"
              type="text"
              name="text"
              placeholder="Type here..."
            />
          </div>

          <div className="inputbox footer-btn">
            <div>
              <Link class="btn btn-sm-dark">Submit</Link>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div>
            <div>My Account</div>
            <Link>Profile</Link>

            <Link>Collection</Link>

            <Link>Mint</Link>
          </div>
          <div>
            <div>Category</div>
            <Link>Art</Link>

            <Link>Gaming</Link>

            <Link>Membership</Link>
            <Link>PFPs</Link>

            <Link>Photography</Link>

            <Link>Others</Link>
          </div>
          <div>
            <div>Company</div>
            <Link>Privacy Policy</Link>

            <Link>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
