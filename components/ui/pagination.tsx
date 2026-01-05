'use client';

import Link from 'next/link';
import { Button } from './button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export function Pagination({ currentPage, totalPages, basePath = '/posts' }: PaginationProps) {
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2; // How many pages to show around current page
    
    for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
      pages.push(i);
    }
    
    // Add first page if not included
    if (pages[0] > 1) {
      pages.unshift(1);
      if (pages[1] > 2) pages.splice(1, 0, -1); // -1 represents ellipsis
    }
    
    // Add last page if not included
    if (pages[pages.length - 1] < totalPages) {
      pages.push(totalPages);
      if (pages[pages.length - 2] < totalPages - 1) pages.splice(-1, 0, -1); // -1 represents ellipsis
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between">
      <div>
        {hasPrevPage ? (
          <Link href={`${basePath}/page/${currentPage - 1}`}>
            <Button variant="outline">Previous</Button>
          </Link>
        ) : (
          <Button variant="outline" disabled>Previous</Button>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        {pageNumbers.map((page, index) => (
          <div key={index}>
            {page === -1 ? (
              <span className="px-2">...</span>
            ) : (
              <Link href={`${basePath}/page/${page}`}>
                <Button
                  variant={currentPage === page ? 'primary' : 'outline'}
                  className={currentPage === page ? 'bg-primary' : ''}
                >
                  {page}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </div>
      
      <div>
        {hasNextPage ? (
          <Link href={`${basePath}/page/${currentPage + 1}`}>
            <Button variant="outline">Next</Button>
          </Link>
        ) : (
          <Button variant="outline" disabled>Next</Button>
        )}
      </div>
    </div>
  );
}