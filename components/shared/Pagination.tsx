import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav className={`flex items-center justify-center gap-1 ${className} mt-6`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-border disabled:opacity-40 font-cinzel text-xs tracking-widest uppercase text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
      >
        Prev
      </button>
      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border font-cinzel text-xs tracking-widest uppercase transition-colors duration-200 ${
            page === currentPage
              ? "border-primary bg-primary text-white"
              : "border-border text-muted-foreground hover:border-primary hover:text-primary"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-border disabled:opacity-40 font-cinzel text-xs tracking-widest uppercase text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;