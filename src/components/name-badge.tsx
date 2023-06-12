const numberGetter = (n:number): number=>{
return n+2;
}
const NameBadge = (
  // {name} : {name:string}
  props: {name: string}
  )=> {
  // : JSX.Element 
  

    if(Math.random()) return null;

  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">HELLO</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{props.name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge; 
