class ResetMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_column :memberships, :member_id
    remove_column :memberships, :group_id
  end
end
