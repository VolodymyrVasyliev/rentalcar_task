import css from './LikeButton.module.css';

type Props = {
  liked: boolean;
  onToggle: () => void;
};

export default function LikeButton({ liked, onToggle }: Props) {
  return (
    <button className={css.likeBtn} onClick={onToggle}>
      <img
        src={liked ? '/icons/heart.svg' : '/icons/heartDefault.svg'}
        alt={liked ? 'Liked' : 'Not liked'}
        className={css.likeIcon}
        width={16}
        height={15}
      />
    </button>
  );
}
