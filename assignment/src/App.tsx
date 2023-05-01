import Gallery from "./Gallery";
interface IData {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const data: IData[] = [
  {
    id: 1,
    title: "Maldives",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac mi vel ex ullamcorper tristique eget quis lectus. In sit amet orci suscipit odio accumsan cursus. Aliquam sodales, velit id malesuada porttitor, ante nibh faucibus nunc, ac rhoncus lacus lacus a nisl. Donec viverra commodo congue. Donec a metus quis purus fermentum egestas lobortis in tellus. Praesent sagittis fringilla rhoncus. Vivamus ipsum est, posuere at sodales vitae, eleifend sit amet sem. Phasellus quis dui vel dolor venenatis ullamcorper mollis at ipsum. Donec pulvinar ante ac enim tincidunt, id sollicitudin leo porttitor. Cras imperdiet, leo nec blandit cursus, velit neque commodo purus, non fermentum ante est non turpis. Nam in convallis est. Maecenas hendrerit tellus eu erat commodo aliquet. Proin vulputate venenatis posuere. Aliquam scelerisque magna odio, vitae malesuada eros elementum sed. Pellentesque quis tellus viverra, egestas neque nec, consectetur turpis. Donec vitae eleifend magna, ut accumsan est.Suspendisse malesuada orci ex, eget pulvinar massa maximus non. Nullam sit amet rhoncus leo, sed vestibulum mauris. Suspendisse congue turpis enim, eget porta nisi imperdiet pretium. Duis vehicula porta ligula ut blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus dolor ut ligula hendrerit, sit amet convallis leo consectetur. Praesent turpis augue, malesuada a turpis in, aliquet laoreet magna. Quisque sed vehicula massa, id dapibus elit.",
    img: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZGl2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Goa",
    desc: "Praesent tempus congue justo, sit amet consequat metus imperdiet in. Suspendisse potenti. Aliquam mauris libero, rutrum non convallis sit amet, vestibulum quis eros. Duis sapien neque, feugiat eget finibus eu, consequat ac eros. Vivamus ac elit vitae est cursus pulvinar. Mauris elementum nibh aliquet magna commodo ultricies. Fusce fermentum vel augue hendrerit tristique. Aliquam consequat leo turpis, id vestibulum velit eleifend ac. Morbi lacinia nisl non lacus tempor, sit amet fringilla nisi pretium. Morbi erat mi, porttitor eget ipsum et, luctus placerat lectus.Etiam maximus sapien nec ante convallis, sit amet lacinia ligula auctor. Nullam consectetur condimentum volutpat. Vestibulum accumsan felis quis nibh pretium, a accumsan sapien dictum. Etiam tellus ante, ultricies ut pharetra id, elementum a orci. Nulla consectetur tempus enim ut sodales. Mauris commodo enim non lectus maximus convallis et ut lorem. Nulla semper, ligula vel posuere venenatis, sapien nisl suscipit nisl, quis ultrices massa lacus convallis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc pharetra maximus velit, non blandit lorem tristique nec. Donec eget augue ut velit suscipit feugiat. Donec vulputate scelerisque est non sagittis. Etiam pellentesque mi id neque imperdiet ultrices. Duis vel nibh vitae lorem interdum laoreet. Quisque odio sem, pulvinar et congue quis, dignissim eget urna.",
    img: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Ladakh",
    desc: "Etiam maximus sapien nec ante convallis, sit amet lacinia ligula auctor. Nullam consectetur condimentum volutpat. Vestibulum accumsan felis quis nibh pretium, a accumsan sapien dictum. Etiam tellus ante, ultricies ut pharetra id, elementum a orci. Nulla consectetur tempus enim ut sodales. Mauris commodo enim non lectus maximus convallis et ut lorem. Nulla semper, ligula vel posuere venenatis, sapien nisl suscipit nisl, quis ultrices massa lacus convallis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc pharetra maximus velit, non blandit lorem tristique nec. Donec eget augue ut velit suscipit feugiat. Donec vulputate scelerisque est non sagittis. Etiam pellentesque mi id neque imperdiet ultrices. Duis vel nibh vitae lorem interdum laoreet. Quisque odio sem, pulvinar et congue quis, dignissim eget urna.Sed vehicula, lorem pellentesque venenatis feugiat, lectus elit pretium massa, sit amet mollis diam mi a nulla. Mauris id pellentesque nunc. Duis at enim ac dolor bibendum scelerisque. Sed eget augue in purus sagittis faucibus at et justo. Donec venenatis velit eget lorem condimentum luctus. Nam laoreet, enim ac rhoncus malesuada, justo est consectetur mi, ac volutpat ante lectus non eros. Nulla bibendum tellus vel commodo pretium. accusamus beatae ad facilis cum similique qui suntac cusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt",
    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFkYWtofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Jaipur",
    desc: "Suspendisse malesuada orci ex, eget pulvinar massa maximus non. Nullam sit amet rhoncus leo, sed vestibulum mauris. Suspendisse congue turpis enim, eget porta nisi imperdiet pretium. Duis vehicula porta ligula ut blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus dolor ut ligula hendrerit, sit amet convallis leo consectetur. Praesent turpis augue, malesuada a turpis in, aliquet laoreet magna. Quisque sed vehicula massa, id dapibus elit.Praesent tempus congue justo, sit amet consequat metus imperdiet in. Suspendisse potenti. Aliquam mauris libero, rutrum non convallis sit amet, vestibulum quis eros. Duis sapien neque, feugiat eget finibus eu, consequat ac eros. Vivamus ac elit vitae est cursus pulvinar. Mauris elementum nibh aliquet magna commodo ultricies. Fusce fermentum vel augue hendrerit tristique. Aliquam consequat leo turpis, id vestibulum velit eleifend ac. Morbi lacinia nisl non lacus tempor, sit amet fringilla nisi pretium. Morbi erat mi, porttitor eget ipsum et, luctus placerat lectus.accusamus beatae ad facilis cum similique qui suntac cusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt accusamus beatae ad facilis cum similique qui sunt",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFqYXN0aGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function App(): JSX.Element {
  return (
    <div>
      <Gallery data={data} />
    </div>
  );
}
