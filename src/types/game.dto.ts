// 게임 카드 타입
export interface GameCardProps {
  gameName: string;
  gameMaker: string;
  gameLikes: number;
  gameImages: string;
  hashtags: string[];
}

// 게임 뷰 형식
export interface GameViewProps {
  gameName: string;
  gameUrl: string;
}

// 게임 댓글 타입
export interface CommentProps {
  profileImage: string;
  nickname: string;
  comment: string;
  likes: number;
  createAt: string;
}

// 게임 프로필 형식
export interface ProfileProps {
  profileImage: string;
  nickname: string;
  introduce: string;
  commentCount: number;
  uploadGames: number;
  tags: string[];
}
