import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1658F6] text-white">
      {/* TOP FOOTER */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* BRAND */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">Company Name</h3>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {[
              <FaXTwitter />,
              <FaFacebookF />,
              <FaYoutube />,
              <FaInstagram />,
            ].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
              >
                {Icon}
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-semibold mb-4">Shopify</h4>
          <ul className="space-y-3 text-white/90">
            <li>About us</li>
            <li>Features</li>
            <li>Blogs</li>
            <li>Reviews</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-white/90">
            <li>Integrations</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="font-semibold mb-4">Developers</h4>
          <ul className="space-y-3 text-white/90">
            <li>Changelog</li>
            <li>Cookie Policy</li>
            <li>Coming Soon</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-3 text-white/90">
            <li>Privacy Policy</li>
            <li>Licensing</li>
            <li>Terms & Conditions</li>
            <li>Password</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-6 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between text-sm text-white/90">
          <span>Copyright © 2025 Yogasana Bharat. All rights reserved.</span>
          <span>Designed by Souvik. Powered by Yogasana Bharat.</span>
        </div>
      </div>
    </footer>
  );
}
