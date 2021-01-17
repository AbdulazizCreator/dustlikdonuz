export const toggle = (state = false, action) => {
   switch (action.type) {
      case 'toggle':
         return !state;
      default:
         return state;
   }
}