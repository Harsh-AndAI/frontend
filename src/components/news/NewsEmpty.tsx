interface NewsEmptyProps {
  message?: string;
}

export const NewsEmpty = ({
  message = "No news is currently available.",
}: NewsEmptyProps) => {
  return (
    <div className="border-t border-brand-border py-20 text-center">
      <p className="text-lg text-brand-text-secondary">
        {message}
      </p>
    </div>
  );
};