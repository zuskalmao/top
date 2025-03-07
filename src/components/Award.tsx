import { Trophy } from 'lucide-react';
import React from 'react';

type AwardProps = {
  className?: string;
};

const Award: React.FC<AwardProps> = ({ className }) => {
  return <Trophy className={className} />;
};

export default Award;
