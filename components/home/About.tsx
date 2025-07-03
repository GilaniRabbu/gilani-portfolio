import DownloadButton from "../shared/DownloadButton";
import GithubButton from "../shared/GithubButton";

export default function About() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-4xl mx-auto p-5">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">About me.</h1>
          <div className="space-y-4 leading-relaxed text-gray-700">
            <p>
              I have been coding for over 5 years, beginning my journey in 2020.
              Initially, I learned HTML, CSS, and JavaScript to build websites.
            </p>
            <p>
              My first project was a simple website built with HTML, CSS, and
              JavaScript (mid-2020).
            </p>
            <p>
              As I progressed, I focused heavily on React.js and Next.js. Now, I
              specialize in building SaaS applications with modern web
              technologies.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 pt-4">
            <GithubButton />
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
}
