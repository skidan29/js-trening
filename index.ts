console.log('started index.ts')


const sum = <T, D extends number>(a: T, b: D): number => Number(a) + Number(b);

interface Test {
    name: string;
    age: number;
    primarySkill?: string
}

const obj = {
    name:'name',
    age: 30,
    primarySkill: 'Developer',
}








