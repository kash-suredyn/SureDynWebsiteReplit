import { Link } from "wouter";
import { generateContextualLinks, InternalLink } from "@/lib/internalLinking";

interface InternalLinkSectionProps {
  pageType: 'emergency' | 'service' | 'problem' | 'local' | 'blog';
  pageContext: string;
  title?: string;
  className?: string;
}

export default function InternalLinkSection({ 
  pageType, 
  pageContext, 
  title = "Related Services",
  className = ""
}: InternalLinkSectionProps) {
  const links = generateContextualLinks(pageType, pageContext);

  if (links.length === 0) return null;

  return (
    <div className={`bg-gray-50 p-8 rounded-lg ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border-l-4 border-suredyn-orange">
              <span className="text-gray-900 font-medium hover:text-suredyn-orange transition-colors">
                {link.text}
              </span>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span className="capitalize">{link.context}</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Inline contextual link component
interface ContextualLinkProps {
  text: string;
  href: string;
  className?: string;
}

export function ContextualLink({ text, href, className = "" }: ContextualLinkProps) {
  return (
    <Link href={href}>
      <span className={`text-suredyn-orange hover:text-suredyn-orange-dark underline font-medium cursor-pointer ${className}`}>
        {text}
      </span>
    </Link>
  );
}

// Quick navigation component for related pages
interface QuickNavProps {
  currentPage: string;
  relatedPages: Array<{ title: string; href: string; description: string }>;
}

export function QuickNav({ currentPage, relatedPages }: QuickNavProps) {
  return (
    <div className="bg-white border-l-4 border-suredyn-orange p-6 rounded-lg shadow-sm">
      <h4 className="font-bold text-gray-900 mb-4">Quick Navigation</h4>
      <div className="space-y-3">
        {relatedPages.map((page, index) => (
          <Link key={index} href={page.href}>
            <div className="block hover:bg-gray-50 p-3 rounded cursor-pointer transition-colors">
              <div className="font-medium text-gray-900 hover:text-suredyn-orange transition-colors">
                {page.title}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {page.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}