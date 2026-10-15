import { ChevronDown, Phone, Search, User } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import MapPinIcon from "../../components/ui/MapPinIcon";
import { customerNames } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function CustomersAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="CUSTOMER DIRECTORY"
        title="Customers"
        description="Understand customer history, value, addresses, and support activity."
        action="Add customer"
      />
      <div className="admin-split customers-layout">
        <article className="table-card">
          <div className="admin-filterbar embedded">
            <div>
              <Search size={16} />
              <input placeholder="Search customers..." />
            </div>
            <Button variant="secondary">
              Segments <ChevronDown size={14} />
            </Button>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Orders</th>
                  <th>Total spent</th>
                  <th>Last order</th>
                  <th>Segment</th>
                </tr>
              </thead>
              <tbody>
                {customerNames.map((name, index) => (
                  <tr
                    className={index === 0 ? "selected-row" : ""}
                    key={name}
                  >
                    <td>
                      <span className="customer-cell">
                        <i>{name[0]}</i>
                        <span>
                          <strong>{name}</strong>
                          <small>
                            {name.toLowerCase().replace(" ", ".")}@email.dz
                          </small>
                        </span>
                      </span>
                    </td>
                    <td>{3 + index * 2}</td>
                    <td>
                      <strong>{189 + index * 74} 900 DA</strong>
                    </td>
                    <td>Jun {18 - index}, 2025</td>
                    <td>
                      <Badge tone={index < 2 ? "blue" : "neutral"}>
                        {index < 2 ? "VIP" : "Regular"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <aside className="customer-profile">
          <div className="profile-cover" />
          <div className="profile-avatar">YB</div>
          <h3>Yasmine Benali</h3>
          <p>Customer since March 2023</p>
          <Badge tone="blue">VIP customer</Badge>
          <div className="profile-stats">
            <span>
              <strong>9</strong>
              <small>Orders</small>
            </span>
            <span>
              <strong>842K</strong>
              <small>Total spent</small>
            </span>
            <span>
              <strong>0</strong>
              <small>Returns</small>
            </span>
          </div>
          <div className="profile-info">
            <span>
              <User size={15} /> yasmine.b@email.dz
            </span>
            <span>
              <Phone size={15} /> +213 555 24 18 90
            </span>
            <span>
              <MapPinIcon /> Alger Centre, Alger
            </span>
          </div>
          <Button variant="secondary" className="full-width">
            View full customer profile
          </Button>
        </aside>
      </div>
    </>
  );
}
