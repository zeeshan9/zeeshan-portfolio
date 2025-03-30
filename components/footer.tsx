import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-[#121628] dark:to-[#1A1E45] border-t border-primary/10 dark:border-primary/20 py-8 noise-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zeeshan Mushtaq. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 animate-pulse" /> and{" "}
              <Sparkles className="h-3 w-3 text-primary animate-pulse" />
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/zeeshan9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110 spotlight"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/zeeshanmushtaq76"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110 spotlight"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:zeeshanmushtaq76@gmail.com"
              className="text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110 spotlight"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

