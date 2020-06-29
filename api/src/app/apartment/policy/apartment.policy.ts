export interface ApartmentPolicy {
  canCreate(): boolean
  canRead(): boolean
  canUpdate(): boolean
  canDelete(): boolean
}
