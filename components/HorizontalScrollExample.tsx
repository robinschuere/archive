export default function MainPage () {
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: 'hidden'}}>
      <div style={{ display: 'flex',  flexDirection: 'column', height: '100%' }}>
        <div style={{ backgroundColor:'red' }}>The header div (Not scrollable)</div>
        <div style={{ backgroundColor:'blue', flex-grow: 1, minHeight: 0, overflowY: 'auto' }}>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
          <div>TEST</div>
        </div>
      </div>
    </div>
  );
}
