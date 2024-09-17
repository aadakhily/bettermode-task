import AvatarRoot from "./AvatarRoot";
import AvatarImage from "./AvatarImage";
import AvatarFallback from "./AvatarFallback";

interface AvatarProps {
  src?: string;
  fallback?: string;
}

function Avatar({ src, fallback }: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarRoot>
  );
}

export default Avatar;
