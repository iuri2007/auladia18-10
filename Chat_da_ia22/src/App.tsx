import "./App.css"

export default () => {
  return <>
  <main>
    <div className="message">
      <div className="user">
        Dunha, aquele!
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi labore odit exercitationem architecto! Impedit voluptates voluptate quod. Sequi aspernatur natus quo, enim reprehenderit consequuntur voluptates sed distinctio saepe in?
      </div>
    </div>
    <div className="message self">
      <div className="user">  Dirce
        Dunha, aquele!
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi labore odit exercitationem architecto! Impedit voluptates voluptate quod. Sequi aspernatur natus quo, enim reprehenderit consequuntur voluptates sed distinctio saepe in?
      </div>
    </div>
  </main>
  <div className="input-area">
      <input type="text" placeholder="digite sua mensgem" />
      <button type="submit"> Enviar</button>
  </div>
  </>
}