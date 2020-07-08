import { Apartment } from '../shared/interfaces'
export const getInfoWindowContent = (item: Apartment): string => {
  return `
      <div class="table-sm table-borderless m-0 info-window-wrapper">
        <table class="table mb-0">
          <tbody>
            <tr>
              <td>
                <strong>Name :</strong>
              </td>
              <td>
                <strong>
                  ${item.name}
                </strong>
              </td>
            </tr>
            <tr>
              <td>State :</td>
              <td>
                <span class="text-success">
                  Available
                </span>
              </td>
            </tr>
            <tr>
              <td>Description :</td>
              <td>
                <p class="m-0">${nlToBr(item.description)}</p>
              </td>
            </tr>
            <tr>
              <td>Price per month :</td>
              <td>
                $ ${ item.pricePerMonth }
              </td>
            </tr>
            <tr>
              <td>Number of rooms :</td>
              <td>${item.numberOfRooms}</td>
            </tr>
            <tr>
              <td>Floor area size :</td>
              <td>${item.floorAreaSize} m<sup>2</sup></td>
            </tr>
            <tr>
              <td>Position :</td>
              <td>
                ${item.latitude}, ${item.longitude}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
}

export const nlToBr = (content: string): string => {
  return content.replace(/(?:\r\n|\r|\n)/g, '<br>')
}