interface ReadingTimeProps {
  minutes: number;
}

export function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <span>{minutes} min read</span>
    </div>
  );
}