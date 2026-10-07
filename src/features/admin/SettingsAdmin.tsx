import {
  Bell,
  ChevronDown,
  ChevronRight,
  CreditCard,
  SlidersHorizontal,
  Store,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import Button from "../../components/ui/Button";
import GlobeIcon from "../../components/ui/GlobeIcon";
import { settingsTabs } from "../../data/admin";
import AdminPageHeader from "./AdminPageHeader";

export default function SettingsAdmin() {
  return (
    <>
      <AdminPageHeader
        eyebrow="CONFIGURATION"
        title="Settings"
        description="Control storefront defaults, fulfilment, access, and localization."
        action="Save changes"
      />
      <div className="settings-layout">
        <aside>
          {settingsTabs.map((tab, index) => (
            <button
              className={index === 0 ? "active" : ""}
              type="button"
              key={tab}
            >
              {index === 0 ? (
                <Store size={17} />
              ) : index === 1 ? (
                <Truck size={17} />
              ) : index === 2 ? (
                <CreditCard size={17} />
              ) : index === 3 ? (
                <SlidersHorizontal size={17} />
              ) : index === 4 ? (
                <Users size={17} />
              ) : index === 5 ? (
                <Bell size={17} />
              ) : (
                <GlobeIcon />
              )}
              {tab}
              <ChevronRight size={14} />
            </button>
          ))}
        </aside>
        <div className="settings-content">
          <div className="form-card">
            <div className="card-title">
              <div>
                <h3>Store information</h3>
                <p>Public identity and contact details</p>
              </div>
            </div>
            <div className="store-logo-upload">
              <span className="brand-mark">
                <Zap size={21} fill="currentColor" />
              </span>
              <div>
                <strong>Store logo</strong>
                <small>SVG, PNG or WEBP · 512×512 recommended</small>
              </div>
              <Button variant="secondary" size="sm">
                Change logo
              </Button>
            </div>
            <div className="field-grid">
              <label>
                <span>Store name</span>
                <input defaultValue="NEOTEK Algeria" />
              </label>
              <label>
                <span>Legal name</span>
                <input defaultValue="NEOTEK EURL" />
              </label>
              <label className="wide">
                <span>Store description</span>
                <textarea defaultValue="Technology selected by people who understand it." />
              </label>
              <label>
                <span>Support email</span>
                <input defaultValue="support@neotek.dz" />
              </label>
              <label>
                <span>Phone</span>
                <input defaultValue="+213 21 55 84 20" />
              </label>
            </div>
          </div>
          <div className="form-card">
            <div className="card-title">
              <div>
                <h3>Regional defaults</h3>
                <p>Language, direction, and money formatting</p>
              </div>
            </div>
            <div className="field-grid">
              <label>
                <span>Default language</span>
                <button type="button" className="select-field">
                  French <ChevronDown size={15} />
                </button>
              </label>
              <label>
                <span>Fallback language</span>
                <button type="button" className="select-field">
                  English <ChevronDown size={15} />
                </button>
              </label>
              <label>
                <span>Currency</span>
                <button type="button" className="select-field">
                  DZD — Algerian Dinar <ChevronDown size={15} />
                </button>
              </label>
              <label>
                <span>Currency format</span>
                <input defaultValue="189 900 DA" />
              </label>
            </div>
            <div className="switch-row">
              <span>
                <strong>Arabic RTL storefront</strong>
                <small>Enable right-to-left layout when Arabic is selected.</small>
              </span>
              <i className="switch on">
                <b />
              </i>
            </div>
            <div className="switch-row">
              <span>
                <strong>Dark mode option</strong>
                <small>Allow customers to choose their interface theme.</small>
              </span>
              <i className="switch on">
                <b />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
