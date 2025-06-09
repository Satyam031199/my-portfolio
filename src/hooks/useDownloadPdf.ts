import { useCallback } from 'react';

const useDownloadPdf = () => {
  return useCallback((fileName: string, downloadName: string): void => {
    try {
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = fileName;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  }, []);
};

export default useDownloadPdf;