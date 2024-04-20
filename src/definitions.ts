export interface fsharePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
