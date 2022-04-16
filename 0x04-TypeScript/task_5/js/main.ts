interface MajorCredits {
  brand: 'Major';
  credits: number;
};
interface MinorCredits {
  brand: 'Minor';
  credits: number;
};

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits; 
}