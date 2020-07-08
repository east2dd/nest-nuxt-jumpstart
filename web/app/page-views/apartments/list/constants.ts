export const FIELDS = [
  {
    key: 'id',
    sortable: true,
    thClass: 'text-info align-middle d-none',
    tdClass: 'text-muted align-middle d-none',
    visible: false
  },
  {
    key: 'name',
    sortable: true,
    thClass: 'text-info align-middle',
    tdClass: 'text-muted align-middle'
  },
  {
    key: 'description',
    sortable: true,
    thClass: 'text-info align-middle d-none',
    tdClass: 'text-muted align-middle d-none'
  },
  {
    key: 'floorAreaSize',
    sortable: true,
    thClass: 'text-info align-middle d-none',
    tdClass: 'text-muted align-middle d-none'
  },
  {
    key: 'pricePerMonth',
    sortable: true,
    thClass: 'text-info align-middle',
    tdClass: 'text-muted align-middle'
  },
  {
    key: 'numberOfRooms',
    sortable: true,
    thClass: 'text-info align-middle',
    tdClass: 'text-muted align-middle pl-5'
  },
  {
    key: 'user',
    thClass: 'text-info align-middle d-none',
    tdClass: 'align-middle d-none'
  },
  {
    key: 'createdAt',
    sortable: true,
    thClass: 'text-info align-middle d-none',
    tdClass: 'text-muted align-middle d-none'
  },
  {
    key: 'actions',
    label: '',
    sortable: false,
    thClass: 'align-middle',
    tdClass: 'align-middle text-right'
  }
]
export const GOOGLE_MAP_OPTIONS = {
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
  disableDefaultUI: false,
  clickableIcons: false
}

export const ITEMS_PER_PAGE = 10
export const TABLE_EMPTY_TEXT = "There are no aparments records in the list."