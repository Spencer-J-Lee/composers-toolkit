import clsx from "clsx";

import { Chip } from "@/components/Chip";
import { Tag } from "@/models/Tag";

type TagsProps = {
  tags: Tag[];
  className?: string;
};

export const Tags = ({ tags, className }: TagsProps) => {
  return (
    <ul className={clsx("flex flex-wrap gap-2 p-2", className)}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Chip text={tag.name} />
        </li>
      ))}
    </ul>
  );
};
