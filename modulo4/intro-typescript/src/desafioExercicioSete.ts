const convertDNAtoRNA = (dna: string): string => {

  let rna: string = ''

  for(let c: number = 0; c < dna.length; c++){
    rna += dna.charAt(c).replace('A', 'U').replace('T', 'A').replace('C', 'x').replace('G', 'C').replace('x', 'G')
  }

  return rna
}

console.log(convertDNAtoRNA("ATTGCTGCGCATTAACGACGCGTA"));