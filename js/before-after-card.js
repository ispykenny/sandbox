export default function() {
  if(!document.getElementsByTagName('body')[0].classList.contains('before-after-card')) return;
  const imageParent = document.querySelector('.image-parent');
  const indicator = document.querySelector('.indicator');
  const imageMask = document.querySelector('.masked__img');
  const indicatorDragger = document.querySelector('.indicator__bubble');
  let dragInterval = null;
  console.log('init')

  const initSize = () => {
    let parentWidth = imageParent.offsetWidth;
    console.log(parentWidth +'px')
    imageMask.style.width = parentWidth + 'px'
  }
  initSize();

  window.addEventListener('resize', initSize)

  const runDragger = (event, flag) => {
    let count = 0;
    if(flag) {
      
      imageParent.addEventListener('mousemove', function(e) {
        if(flag) {
          console.log(e.clientX)
          console.log(flag)

          imageParent.addEventListener('mouseup', function() {
            flag = false;
          })
        }
        
      })

      imageParent.addEventListener('mouseleave', function() {
        flag = false;
      })
    } else {
      flag = false;
    }
  }


  indicator.addEventListener('mousedown', event => runDragger(event, true))
  window.addEventListener('mouseup', event => runDragger(event, false))
}