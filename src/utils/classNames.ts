type TClassNames = string | undefined | null | false | { [key: string]: boolean } | { className?: string };

export function classNames(...args: TClassNames[]): string {
  return args.reduce<string[]>((memo, arg) => {
    if (typeof arg === 'string') {
      memo.push(arg);
    }
    if (typeof arg === 'object' && arg !== null && arg.className && typeof arg.className === 'string') {
      memo.push(arg.className);
    }

    return memo;
  }, []).join(' ').replace(/\s+/g, ' ').trim()
}
