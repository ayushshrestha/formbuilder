// menuData.ts
interface MenuItem {
    id: number;
    label: string;
    link: string;
  }
  
  const menuData: MenuItem[] = [
    { id: 1, label: 'Avatar', link: '/' },
    { id: 2, label: 'Badge', link: '/' },
    { id: 3, label: 'Button', link: '/' },
    { id: 4, label: 'Card', link: '/' },
  ];
  
  export default menuData;