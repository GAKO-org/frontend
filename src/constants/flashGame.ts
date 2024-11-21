import {
  CommentProps,
  GameCardProps,
  GameViewProps,
  ProfileProps,
} from "@/types/game.dto";

// BE에서 받아올 데이터 형식
export const flashGames: GameCardProps[] = [
  {
    gameName: "Atlantic Sky Hunter Xtreme",
    gameMaker: "flash game",
    gameLikes: 23,
    gameImages: "../../src/assets/images/Atlantic.jpg",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Zombie And Platne",
    gameMaker: "flash game",
    gameLikes: 0,
    gameImages: "../../src/assets/images/zombie-plant.jpg",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Dogs Save",
    gameMaker: "flashgame",
    gameLikes: 0,
    gameImages: "../../src/assets/images/dogs-save.jpg",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Fire And Water",
    gameMaker: "flashgame",
    gameLikes: 0,
    gameImages: "../../src/assets/images/Fire-and-water.jpg",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Geometry Dash",
    gameMaker: "flashgame",
    gameLikes: 0,
    gameImages: "../../src/assets/images/Geometry-Dash.jpg",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Bubble Shooter Arcade",
    gameMaker: "flashgame",
    gameLikes: 2,
    gameImages: "../../src/assets/images/Bubble-Shooter-Arcade.png",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "2024",
    gameMaker: "flashgame",
    gameLikes: 2,
    gameImages: "../../src/assets/images/2024.png",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Yatzy Arena",
    gameMaker: "flashgame",
    gameLikes: 2,
    gameImages: "../../src/assets/images/Yatzy-Arena.png",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Climbing-Over-It",
    gameMaker: "flashgame",
    gameLikes: 2,
    gameImages: "../../src/assets/images/Climbing-Over-It.png",
    hashtags: ["flashgame", "shooting", "action"],
  },
  {
    gameName: "Online-Chess",
    gameMaker: "flashgame",
    gameLikes: 2,
    gameImages: "../../src/assets/images/Online-Chess.png",
    hashtags: ["flashgame", "shooting", "action"],
  },
];

export const flashGameView: GameViewProps[] = [
  {
    gameName: "Atlantic Sky Hunter Xtreme",
    gameUrl:
      "https://html5.gamedistribution.com/da29c9ad4ef541be8c1078f02033fc3b/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
  },
  {
    gameName: "Zombie And Platne",
    gameUrl: "https://turbowarp.org/690378513/embed",
  },
  {
    gameName: "Dogs Save",
    gameUrl:
      "https://html5.gamedistribution.com/49051d436ca64098aedb317a6a7b3ebe/?gd_sdk_referrer_url=https://intlivi.com/bbs_detail.php?bbs_num=1157&amp;tb=b_mh_ibl_765&amp;id=gpm",
  },
  {
    gameName: "Fire And Water",
    gameUrl:
      "https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?gd_sdk_referrer_url=https://intlivi.com/bbs_detail.php?bbs_num=44&amp;tb=b_mh_ibl_765&amp;id=gpm&amp;pg=&amp;start=&amp;delivery=0",
  },
  {
    gameName: "Geometry Dash",
    gameUrl: "https://scratch.mit.edu/projects/105500895/embed",
  },
  {
    gameName: "Bubble Shooter Arcade",
    gameUrl:
      "https://html5.gamedistribution.com/e50eb7a0efe14f19ae2233a20a762da3/?gd_sdk_referrer_url=https://intlivi.com/bbs_detail.php?bbs_num=1167&tb=b_mh_ibl_765&id=gpm",
  },
  {
    gameName: "2024",
    gameUrl:
      "https://html5.gamedistribution.com/a7e9cac8a9df4b0d97996b86cf9ccbfb/?gd_sdk_referrer_url=https://intlivi.com/bbs_detail.php?bbs_num=1144&tb=b_mh_ibl_765&id=gpm",
  },
  {
    gameName: "Yatzy Arena",
    gameUrl:
      "https://html5.gamedistribution.com/b3522442efc6449bbd3e3bc7d3317557/?gd_sdk_referrer_url=https://intlivi.com/bbs_detail.php?bbs_num=1137&tb=b_mh_ibl_765&id=gpm",
  },
  {
    gameName: "Climbing-Over-It",
    gameUrl:
      "https://html5.gamedistribution.com/e929820f9671485181cfc79eb335dadf/?gd_sdk_referrer_url=https://intlivi.com/bbs_detail.php?bbs_num=1147&tb=b_mh_ibl_765&id=gpm",
  },
  {
    gameName: "Online-Chess",
    gameUrl:
      "https://html5.gamedistribution.com/f9ea5f1f746c492d8fa217c1998fd992/?gd_sdk_referrer_url=https://intlivi.com/bbs_detail.php?bbs_num=273&tb=b_mh_ibl_765&id=gpm",
  },
];

export const CommentList: CommentProps[] = [
  {
    profileImage: "../../src/assets/images/person_1.png",
    nickname: "SunnyLover",
    comment: "This is an amazing article! Thanks for sharing 😊",
    likes: 23,
    createAt: "2024-11-19 14:23",
  },
  {
    profileImage: "https://example.com/images/user2.jpg",
    nickname: "TechieGuy",
    comment: "Great insights, I really enjoyed reading this.",
    likes: 15,
    createAt: "2024-11-19 13:45",
  },
  {
    profileImage: "https://example.com/images/user3.jpg",
    nickname: "NatureFan",
    comment: "I love the perspective you shared here. Nature is amazing!",
    likes: 8,
    createAt: "2024-11-19 12:30",
  },
  {
    profileImage: "https://example.com/images/user4.jpg",
    nickname: "Coder123",
    comment: "Interesting points. I'll definitely look into this further.",
    likes: 19,
    createAt: "2024-11-19 11:50",
  },
  {
    profileImage: "https://example.com/images/user5.jpg",
    nickname: "Foodie",
    comment: "This reminds me of a similar recipe I tried last week!",
    likes: 27,
    createAt: "2024-11-19 11:20",
  },
  {
    profileImage: "https://example.com/images/user6.jpg",
    nickname: "TravelBug",
    comment: "Where was this photo taken? Looks like a dream destination 😍",
    likes: 45,
    createAt: "2024-11-19 10:05",
  },
  {
    profileImage: "https://example.com/images/user7.jpg",
    nickname: "BookWorm",
    comment:
      "This reminds me of a book I read recently. Thanks for the inspiration!",
    likes: 12,
    createAt: "2024-11-19 09:50",
  },
  {
    profileImage: "https://example.com/images/user8.jpg",
    nickname: "MusicFan",
    comment: "What a great playlist to pair with this article!",
    likes: 34,
    createAt: "2024-11-19 09:00",
  },
  {
    profileImage: "https://example.com/images/user9.jpg",
    nickname: "GamerGirl",
    comment: "As a gamer, I totally relate to your point here.",
    likes: 29,
    createAt: "2024-11-19 08:45",
  },
  {
    profileImage: "https://example.com/images/user10.jpg",
    nickname: "FitnessFreak",
    comment: "This motivated me to hit the gym harder today! 💪",
    likes: 53,
    createAt: "2024-11-19 08:15",
  },
];

export const mockProfile: ProfileProps = {
  profileImage: "../../src/assets/images/person_1.png", // 프로필 이미지 URL
  nickname: "GamerKing", // 닉네임
  introduce: "안녕하세요! 게임을 사랑하는 게이머입니다.", // 소개글
  commentCount: 45, // 댓글 수
  uploadGames: 10, // 업로드한 게임 수
  tags: ["RPG", "Adventure", "Strategy"], // 태그 리스트
};
