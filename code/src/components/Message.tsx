export type MessageProps = {
  text: string;
  type: 'red' | 'green';
};

export function Message({ type, text }: MessageProps) {
  return (
    <div
      data-testid="message"
      className={`p-3 rounded-md mb-2 my-1 ${
        type === 'red' ? 'bg-red-400' : 'bg-green-400'
      } text-white`}
    >
      {text}
    </div>
  );
}
