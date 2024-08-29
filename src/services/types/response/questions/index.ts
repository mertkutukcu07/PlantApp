export type QuestionsResponse = Questions[];

export interface Questions {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

export interface QuestionsState {
  questions: QuestionsResponse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
