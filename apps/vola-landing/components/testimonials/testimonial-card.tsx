interface TestimonialCardProps {
  author: {
    name: string;
    image: string;
    handle?: string;
    platform?: string;
  };
  content: string;
}

export function TestimonialCard({ author, content }: TestimonialCardProps) {
  return (
    <div className="bg-card border rounded-lg p-6 shadow-sm break-inside-avoid w-fit max-w-[26rem] h-72 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 mr-4">
            <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
          </span>
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            {author.handle && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <span>@{author.handle}</span>
                {author.platform === 'producthunt' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <title>Product Hunt</title>
                    <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" />
                  </svg>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="mb-4 whitespace-pre-wrap">{content}</p>
    </div>
  )
}