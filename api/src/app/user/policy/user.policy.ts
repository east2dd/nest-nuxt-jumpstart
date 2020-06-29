export interface UserPolicy {
  canCreate(): boolean
  canRead(): boolean
  canUpdate(): boolean
  canDelete(): boolean
}
